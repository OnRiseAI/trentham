"use client";

import { useState, useEffect, useRef, useCallback } from "react";

// ─── CONFIGURATION ───────────────────────────────────────────
const AGENT_ID = "agent_1d8eb21274920d508d9077dc1b";

// ─── ICONS ───────────────────────────────────────────────────
function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function SunIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function BoltIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function BatteryIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
      <line x1="23" y1="13" x2="23" y2="11" />
      <line x1="6" y1="10" x2="6" y2="14" />
      <line x1="10" y1="10" x2="10" y2="14" />
      <line x1="14" y1="10" x2="14" y2="14" />
    </svg>
  );
}

function ThermometerIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    </svg>
  );
}

function MicIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5z" />
      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
    </svg>
  );
}

function MicOffIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z" />
    </svg>
  );
}

function PhoneOffIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" />
      <line x1="23" y1="1" x2="1" y2="23" />
    </svg>
  );
}

function CheckIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// ─── AUDIO VISUALIZER ────────────────────────────────────────
function AudioVisualizer({ isAgentTalking }) {
  const [heights, setHeights] = useState([8, 8, 8, 8, 8]);

  useEffect(() => {
    if (!isAgentTalking) {
      setHeights([8, 8, 8, 8, 8]);
      return;
    }
    const interval = setInterval(() => {
      setHeights(
        Array.from({ length: 5 }, () => 8 + Math.random() * 32)
      );
    }, 120);
    return () => clearInterval(interval);
  }, [isAgentTalking]);

  return (
    <div className="flex items-center justify-center gap-[5px] h-12">
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-[4px] rounded-full transition-all duration-100"
          style={{
            height: `${h}px`,
            backgroundColor: isAgentTalking ? "#F59E0B" : "#374151",
          }}
        />
      ))}
    </div>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────────────
export default function Home() {
  const [callState, setCallState] = useState("idle"); // idle | connecting | active | ended
  const [isAgentTalking, setIsAgentTalking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [transcript, setTranscript] = useState([]);
  const [callDuration, setCallDuration] = useState(0);
  const [error, setError] = useState(null);
  const retellClientRef = useRef(null);
  const timerRef = useRef(null);
  const transcriptEndRef = useRef(null);

  // Auto-scroll transcript
  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [transcript]);

  // Call duration timer
  useEffect(() => {
    if (callState === "active") {
      timerRef.current = setInterval(() => {
        setCallDuration((d) => d + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [callState]);

  const formatDuration = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  // ─── START CALL ────────────────────────────────────────────
  const startCall = useCallback(async () => {
    setError(null);
    setCallState("connecting");
    setTranscript([]);
    setCallDuration(0);

    try {
      // Dynamic import so SDK only loads client-side
      // Request microphone permission explicitly first
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        // Stop the stream — the SDK will create its own
        stream.getTracks().forEach((track) => track.stop());
      } catch (micErr) {
        console.error("Microphone access denied:", micErr);
        setError(
          "Microphone access denied. Please allow microphone access in your browser and try again."
        );
        setCallState("idle");
        return;
      }

      const { RetellWebClient } = await import("retell-client-js-sdk");
      const client = new RetellWebClient();
      retellClientRef.current = client;

      // Get access token from our API route
      const response = await fetch("/api/create-web-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ agent_id: AGENT_ID }),
      });

      if (!response.ok) {
        throw new Error("Failed to create web call");
      }

      const data = await response.json();

      // Event listeners
      client.on("call_started", () => {
        setCallState("active");
      });

      client.on("call_ended", () => {
        setCallState("ended");
        setIsAgentTalking(false);
        retellClientRef.current = null;
      });

      client.on("agent_start_talking", () => setIsAgentTalking(true));
      client.on("agent_stop_talking", () => setIsAgentTalking(false));

      client.on("update", (update) => {
        if (update.transcript) {
          const entries = update.transcript.map((t) => ({
            role: t.role,
            content: t.content,
          }));
          setTranscript(entries);
        }
      });

      client.on("error", (err) => {
        console.error("Retell error:", err);
        setError("Connection lost. Please try again.");
        setCallState("idle");
        retellClientRef.current = null;
      });

      // Start the WebRTC call
      await client.startCall({
        accessToken: data.access_token,
      });
    } catch (err) {
      console.error("Failed to start call:", err);
      setError(
        "Unable to start call. Please check your microphone permissions and try again."
      );
      setCallState("idle");
    }
  }, []);

  // ─── END CALL ──────────────────────────────────────────────
  const endCall = useCallback(() => {
    if (retellClientRef.current) {
      retellClientRef.current.stopCall();
    }
    setCallState("ended");
    setIsAgentTalking(false);
  }, []);

  // ─── MUTE / UNMUTE ────────────────────────────────────────
  const toggleMute = useCallback(() => {
    if (retellClientRef.current) {
      if (isMuted) {
        retellClientRef.current.unmute();
      } else {
        retellClientRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  // ─── RESET ─────────────────────────────────────────────────
  const resetCall = useCallback(() => {
    setCallState("idle");
    setTranscript([]);
    setCallDuration(0);
    setError(null);
    setIsAgentTalking(false);
    setIsMuted(false);
  }, []);

  // ─── DATA ──────────────────────────────────────────────────
  const services = [
    { Icon: SunIcon, title: "Grid-Connected Solar", desc: "Panels, batteries & monitoring" },
    { Icon: BatteryIcon, title: "Off-Grid Solar", desc: "Full independence systems" },
    { Icon: BoltIcon, title: "General Electrical", desc: "Installations, repairs & EV chargers" },
    { Icon: ThermometerIcon, title: "Heat Pumps & HVAC", desc: "Rebate-eligible hot water & AC" },
  ];

  const suggestions = [
    "What solar rebates are available?",
    "Do you service Kyneton?",
    "How much does a solar system cost?",
    "Can you install EV chargers?",
  ];

  // ─── RENDER ────────────────────────────────────────────────
  return (
    <div className="min-h-screen relative">
      {/* ─── Background ─── */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-amber-500/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[100px]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* ─── Header ─── */}
      <header className="relative z-10 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <BoltIcon className="w-5 h-5 text-[#0A0F1C]" />
            </div>
            <div>
              <h1 className="font-display text-lg font-bold tracking-tight leading-none">
                Trentham Electrical & Solar
              </h1>
              <p className="font-body text-xs text-white/40 mt-0.5">
                Hepburn Shire · Macedon Ranges · Central Victoria
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span className="font-body text-xs text-white/30">Powered by</span>
            <span className="font-display text-sm font-semibold text-amber-400/80">
              OnRise
            </span>
          </div>
        </div>
      </header>

      {/* ─── Main ─── */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* ─── Left Column ─── */}
          <div className="space-y-8 animate-float-in">
            {/* Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-6">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-body text-xs text-white/60">
                  AI Voice Assistant — Available 24/7
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight">
                Talk to our
                <br />
                <span className="gradient-text">AI Assistant</span>
              </h2>

              <p className="font-body text-base text-white/50 mt-5 max-w-md leading-relaxed">
                Try our intelligent voice assistant. Ask about solar
                installations, electrical services, rebates, or book a
                consultation — just like calling the office.
              </p>
            </div>

            {/* Services */}
            <div className="grid grid-cols-2 gap-3">
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className="glass-card rounded-2xl p-4 hover:border-amber-500/20 transition-all duration-300"
                  style={{
                    animation: `float-in 0.5s ease-out ${0.15 + i * 0.08}s forwards`,
                    opacity: 0,
                  }}
                >
                  <service.Icon className="w-5 h-5 text-amber-400 mb-3" />
                  <h3 className="font-display text-sm font-semibold mb-1">
                    {service.title}
                  </h3>
                  <p className="font-body text-xs text-white/40 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {["CEC Certified", "5-Star Rated", "Local Team"].map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-emerald-400" />
                  <span className="font-body text-xs text-white/50">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right Column: Call Widget ─── */}
          <div
            style={{
              animation: "float-in 0.6s ease-out 0.2s forwards",
              opacity: 0,
            }}
          >
            <div className="glass-card rounded-3xl overflow-hidden">
              {/* Widget Header */}
              <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      callState === "active"
                        ? "bg-emerald-400 animate-pulse"
                        : callState === "connecting"
                        ? "bg-amber-400 animate-pulse"
                        : "bg-white/20"
                    }`}
                  />
                  <span className="font-display text-sm font-medium">
                    {callState === "idle" && "Ready to call"}
                    {callState === "connecting" && "Connecting..."}
                    {callState === "active" &&
                      `Call active · ${formatDuration(callDuration)}`}
                    {callState === "ended" &&
                      `Call ended · ${formatDuration(callDuration)}`}
                  </span>
                </div>
                {callState === "active" && (
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <MicOffIcon className="w-4 h-4 text-red-400" />
                    ) : (
                      <MicIcon className="w-4 h-4 text-white/50" />
                    )}
                  </button>
                )}
              </div>

              {/* Call Area */}
              <div className="px-6 py-10 flex flex-col items-center justify-center min-h-[360px]">
                {/* ── IDLE ── */}
                {callState === "idle" && (
                  <div className="text-center space-y-6">
                    <div className="relative w-20 h-20 mx-auto">
                      <div className="absolute inset-0 rounded-full bg-amber-400/10 animate-ping opacity-20" />
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 border border-amber-400/20 flex items-center justify-center">
                        <PhoneIcon className="w-8 h-8 text-amber-400" />
                      </div>
                    </div>
                    <div>
                      <p className="font-display text-lg font-semibold">
                        Speak with Sam
                      </p>
                      <p className="font-body text-sm text-white/40 mt-1">
                        Our AI assistant for Trentham Electrical & Solar
                      </p>
                    </div>

                    <button
                      onClick={startCall}
                      className="group px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-[#0A0F1C] font-display font-semibold text-sm hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span className="flex items-center gap-2">
                        <PhoneIcon className="w-4 h-4" />
                        Start Conversation
                      </span>
                    </button>

                    {/* Suggestion Pills */}
                    <div className="flex flex-wrap justify-center gap-2 pt-2">
                      {suggestions.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 rounded-full text-[11px] font-body text-white/35 border border-white/[0.06] bg-white/[0.02]"
                        >
                          &ldquo;{s}&rdquo;
                        </span>
                      ))}
                    </div>

                    <p className="font-body text-[11px] text-white/20 pt-1">
                      Microphone access required · Free demo call
                    </p>
                  </div>
                )}

                {/* ── CONNECTING ── */}
                {callState === "connecting" && (
                  <div className="text-center space-y-6">
                    <div className="relative w-20 h-20 mx-auto">
                      <div className="absolute inset-0 rounded-full border-2 border-amber-400/40 animate-ping" />
                      <div className="relative w-20 h-20 rounded-full border-2 border-amber-400/30 flex items-center justify-center">
                        <PhoneIcon className="w-8 h-8 text-amber-400 animate-pulse" />
                      </div>
                    </div>
                    <div>
                      <p className="font-display text-lg font-semibold">
                        Connecting...
                      </p>
                      <p className="font-body text-sm text-white/40 mt-1">
                        Setting up your call with Sam
                      </p>
                    </div>
                  </div>
                )}

                {/* ── ACTIVE ── */}
                {callState === "active" && (
                  <div className="w-full space-y-6">
                    {/* Agent avatar + visualizer */}
                    <div className="flex flex-col items-center gap-3">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isAgentTalking
                            ? "bg-amber-400/20 border-2 border-amber-400/40 glow-active"
                            : "bg-white/5 border border-white/10"
                        }`}
                      >
                        <SunIcon
                          className={`w-7 h-7 transition-colors ${
                            isAgentTalking ? "text-amber-400" : "text-white/30"
                          }`}
                        />
                      </div>
                      <AudioVisualizer isAgentTalking={isAgentTalking} />
                      <p className="font-body text-xs text-white/40">
                        {isAgentTalking ? "Sam is speaking..." : "Listening..."}
                      </p>
                    </div>

                    {/* Live transcript */}
                    {transcript.length > 0 && (
                      <div className="glass-card rounded-xl max-h-[160px] overflow-y-auto transcript-scroll p-4 space-y-2">
                        {transcript.map((entry, i) => (
                          <div
                            key={i}
                            className={`flex gap-2 ${
                              entry.role === "agent" ? "" : "justify-end"
                            }`}
                          >
                            <div
                              className={`max-w-[85%] rounded-xl px-3 py-2 ${
                                entry.role === "agent"
                                  ? "bg-amber-400/10 text-white/80"
                                  : "bg-white/10 text-white/70"
                              }`}
                            >
                              <p className="font-body text-xs leading-relaxed">
                                {entry.content}
                              </p>
                            </div>
                          </div>
                        ))}
                        <div ref={transcriptEndRef} />
                      </div>
                    )}

                    {/* End call */}
                    <div className="flex justify-center">
                      <button
                        onClick={endCall}
                        className="px-6 py-3 rounded-2xl bg-red-500/20 border border-red-500/30 text-red-400 font-display font-semibold text-sm hover:bg-red-500/30 transition-all duration-200 active:scale-[0.97]"
                      >
                        <span className="flex items-center gap-2">
                          <PhoneOffIcon className="w-4 h-4" />
                          End Call
                        </span>
                      </button>
                    </div>
                  </div>
                )}

                {/* ── ENDED ── */}
                {callState === "ended" && (
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center">
                      <CheckIcon className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div>
                      <p className="font-display text-lg font-semibold">
                        Call Complete
                      </p>
                      <p className="font-body text-sm text-white/40 mt-1">
                        Thanks for trying our AI assistant
                      </p>
                      <p className="font-body text-xs text-white/25 mt-2">
                        Duration: {formatDuration(callDuration)}
                      </p>
                    </div>
                    <div className="flex gap-3 justify-center">
                      <button
                        onClick={resetCall}
                        className="px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-[#0A0F1C] font-display font-semibold text-sm hover:from-amber-400 hover:to-amber-500 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        Call Again
                      </button>
                      <a
                        href="tel:1300345800"
                        className="px-6 py-3 rounded-2xl glass-card font-display font-semibold text-sm text-white/70 hover:text-white hover:border-white/20 transition-all duration-200"
                      >
                        Call Office
                      </a>
                    </div>
                  </div>
                )}

                {/* Error */}
                {error && (
                  <div className="mt-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
                    <p className="font-body text-xs text-red-400">{error}</p>
                    <button
                      onClick={resetCall}
                      className="mt-2 font-body text-xs text-amber-400 underline underline-offset-2 hover:text-amber-300"
                    >
                      Try again
                    </button>
                  </div>
                )}
              </div>

              {/* Widget Footer */}
              <div className="px-6 py-3 border-t border-white/5 shimmer-bg">
                <p className="font-body text-[10px] text-white/25 text-center">
                  This is a demo of our AI voice assistant. For urgent matters,
                  call{" "}
                  <a
                    href="tel:1300345800"
                    className="text-white/40 hover:text-amber-400/60 transition-colors"
                  >
                    1300 3458 00
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ─── Footer ─── */}
      <footer className="relative z-10 border-t border-white/5 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/25">
            AI Voice Demo · trentham.onrise.ai
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.trenthamelectrical.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-white/30 hover:text-amber-400/60 transition-colors"
            >
              Visit Website
            </a>
            <span className="text-white/10">·</span>
            <a
              href="tel:1300345800"
              className="font-body text-xs text-white/30 hover:text-amber-400/60 transition-colors"
            >
              1300 3458 00
            </a>
            <span className="text-white/10">·</span>
            <a
              href="https://www.onrise.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs text-amber-400/40 hover:text-amber-400/70 transition-colors"
            >
              Powered by OnRise AI
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
