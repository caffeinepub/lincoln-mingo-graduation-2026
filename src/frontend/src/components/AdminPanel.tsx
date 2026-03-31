import { useCallback, useEffect, useState } from "react";
import type { InviteCode, RSVP } from "../backend.d";
import { useActor } from "../hooks/useActor";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

interface AdminPanelProps {
  onClose: () => void;
}

export default function AdminPanel({ onClose }: AdminPanelProps) {
  const { actor } = useActor();
  const { identity, login, clear, isLoggingIn } = useInternetIdentity();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [rsvps, setRsvps] = useState<RSVP[]>([]);
  const [inviteCodes, setInviteCodes] = useState<InviteCode[]>([]);
  const [newCode, setNewCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);

  const loadData = useCallback(async () => {
    if (!actor) return;
    setLoading(true);
    try {
      const [adminStatus, allRsvps, codes] = await Promise.all([
        actor.isCallerAdmin(),
        actor.getAllRSVPs(),
        actor.getInviteCodes(),
      ]);
      setIsAdmin(adminStatus);
      setRsvps(allRsvps);
      setInviteCodes(codes);
    } catch {
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  }, [actor]);

  useEffect(() => {
    if (identity && actor) {
      void loadData();
    }
  }, [identity, actor, loadData]);

  const handleGenerateCode = async () => {
    if (!actor) return;
    setGenerating(true);
    try {
      const code = await actor.generateInviteCode();
      setNewCode(code);
      await loadData();
    } catch (err: unknown) {
      console.error(err);
    } finally {
      setGenerating(false);
    }
  };

  const formatDate = (timestamp: bigint) => {
    return new Date(Number(timestamp) / 1_000_000).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-8 overflow-y-auto"
      style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
    >
      {/* Invisible backdrop button for click-to-close */}
      <button
        type="button"
        aria-label="Close admin panel"
        className="fixed inset-0 w-full h-full cursor-default"
        style={{ background: "transparent", border: "none", zIndex: -1 }}
        onClick={onClose}
      />
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-3xl relative"
        style={{ border: "2px solid #B89A4A" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ backgroundColor: "#0F2B4A", borderRadius: "6px 6px 0 0" }}
        >
          <h2
            className="text-xl font-bold"
            style={{
              color: "#B89A4A",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Admin Panel
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-white hover:opacity-70 text-2xl leading-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        <div className="p-6">
          {!identity ? (
            <div className="text-center py-8">
              <p className="text-base mb-6" style={{ color: "#333333" }}>
                Sign in with Internet Identity to access the admin panel.
              </p>
              <button
                type="button"
                onClick={login}
                disabled={isLoggingIn}
                className="px-8 py-3 text-sm uppercase font-bold tracking-widest text-white rounded hover:opacity-90 disabled:opacity-50"
                style={{ backgroundColor: "#0F2B4A" }}
              >
                {isLoggingIn ? "Signing In..." : "Sign In"}
              </button>
            </div>
          ) : loading ? (
            <div className="text-center py-8">
              <p style={{ color: "#555555" }}>Loading...</p>
            </div>
          ) : isAdmin === false ? (
            <div className="text-center py-8">
              <p className="text-base mb-4" style={{ color: "#8B1A28" }}>
                Access denied. Admin privileges required.
              </p>
              <button
                type="button"
                onClick={clear}
                className="text-sm underline"
                style={{ color: "#555555" }}
              >
                Sign out
              </button>
            </div>
          ) : (
            <>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  {
                    label: "Total RSVPs",
                    value: rsvps.length,
                    color: "#0F2B4A",
                  },
                  {
                    label: "Attending",
                    value: rsvps.filter((r) => r.attending).length,
                    color: "#0F2B4A",
                  },
                  {
                    label: "Declining",
                    value: rsvps.filter((r) => !r.attending).length,
                    color: "#8B1A28",
                  },
                ].map(({ label, value, color }) => (
                  <div
                    key={label}
                    className="rounded-lg p-4 text-center"
                    style={{ backgroundColor: "#F2F2F2" }}
                  >
                    <p
                      className="text-3xl font-bold"
                      style={{ color, fontFamily: "'Playfair Display', serif" }}
                    >
                      {value}
                    </p>
                    <p
                      className="text-xs uppercase tracking-widest mt-1"
                      style={{ color: "#555555" }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Generate invite code */}
              <div
                className="mb-6 rounded-lg p-4"
                style={{
                  backgroundColor: "#F9F0E8",
                  border: "1px solid #B89A4A",
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#0F2B4A" }}
                    >
                      Generate Invite Link
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "#555555" }}>
                      Create a new invite link to share with guests
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleGenerateCode}
                    disabled={generating}
                    className="px-4 py-2 text-xs uppercase font-bold tracking-widest text-white rounded hover:opacity-90 disabled:opacity-50 flex-shrink-0"
                    style={{ backgroundColor: "#0F2B4A" }}
                  >
                    {generating ? "Generating..." : "Generate"}
                  </button>
                </div>
                {newCode && (
                  <div
                    className="mt-3 p-3 rounded"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #d1d5db",
                    }}
                  >
                    <p
                      className="text-xs font-semibold mb-1"
                      style={{ color: "#8B1A28" }}
                    >
                      New invite link:
                    </p>
                    <p
                      className="text-xs font-mono break-all"
                      style={{ color: "#0F2B4A" }}
                    >
                      {window.location.origin + window.location.pathname}
                      ?invite={newCode}
                    </p>
                  </div>
                )}
              </div>

              {/* RSVPs table */}
              <div className="mb-6">
                <h3
                  className="text-lg font-bold mb-3"
                  style={{
                    color: "#0F2B4A",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  RSVP Responses
                </h3>
                {rsvps.length === 0 ? (
                  <p
                    className="text-sm text-center py-6"
                    style={{ color: "#555555" }}
                  >
                    No RSVPs yet.
                  </p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr style={{ borderBottom: "2px solid #0F2B4A" }}>
                          <th
                            className="text-left py-2 px-3 text-xs uppercase tracking-widest"
                            style={{ color: "#0F2B4A" }}
                          >
                            Name
                          </th>
                          <th
                            className="text-left py-2 px-3 text-xs uppercase tracking-widest"
                            style={{ color: "#0F2B4A" }}
                          >
                            Status
                          </th>
                          <th
                            className="text-left py-2 px-3 text-xs uppercase tracking-widest"
                            style={{ color: "#0F2B4A" }}
                          >
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {rsvps.map((rsvp) => (
                          <tr
                            key={`${rsvp.inviteCode}-${rsvp.name}`}
                            style={{ borderBottom: "1px solid #e5e7eb" }}
                          >
                            <td
                              className="py-3 px-3 font-medium"
                              style={{ color: "#111111" }}
                            >
                              {rsvp.name}
                            </td>
                            <td className="py-3 px-3">
                              <span
                                className="px-2 py-1 rounded text-xs font-bold uppercase"
                                style={{
                                  backgroundColor: rsvp.attending
                                    ? "#dcfce7"
                                    : "#fee2e2",
                                  color: rsvp.attending ? "#15803d" : "#991b1b",
                                }}
                              >
                                {rsvp.attending ? "✓ Attending" : "✗ Declining"}
                              </span>
                            </td>
                            <td
                              className="py-3 px-3 text-xs"
                              style={{ color: "#555555" }}
                            >
                              {formatDate(rsvp.timestamp)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Invite codes */}
              <div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{
                    color: "#0F2B4A",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Invite Codes ({inviteCodes.length})
                </h3>
                {inviteCodes.length === 0 ? (
                  <p
                    className="text-sm text-center py-4"
                    style={{ color: "#555555" }}
                  >
                    No invite codes generated yet.
                  </p>
                ) : (
                  <div className="space-y-2">
                    {inviteCodes.map((code) => (
                      <div
                        key={code.code}
                        className="flex items-center justify-between rounded px-3 py-2"
                        style={{ backgroundColor: "#F2F2F2" }}
                      >
                        <span
                          className="font-mono text-sm"
                          style={{ color: "#0F2B4A" }}
                        >
                          {code.code}
                        </span>
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded"
                          style={{
                            backgroundColor: code.used ? "#fef3c7" : "#dcfce7",
                            color: code.used ? "#92400e" : "#15803d",
                          }}
                        >
                          {code.used ? "Used" : "Available"}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div
                className="mt-6 pt-4"
                style={{ borderTop: "1px solid #e5e7eb" }}
              >
                <button
                  type="button"
                  onClick={clear}
                  className="text-sm underline"
                  style={{ color: "#555555" }}
                >
                  Sign out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
