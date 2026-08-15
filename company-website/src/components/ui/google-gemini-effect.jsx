import { motion } from "motion/react";

/**
 * Aceternity UI — Google Gemini Effect
 * Source-faithful implementation with minor prop flexibility.
 */

const transition = {
  duration: 0,
  ease: "linear",
};

export const GoogleGeminiEffect = ({
  pathLengths,
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`gemini-root sticky top-0 flex flex-col items-center bg-transparent justify-center ${className}`}>
      <p className="gemini-title">{title}</p>
      <p className="gemini-desc">{description}</p>

      <svg
        width="1366"
        height="310"
        viewBox="0 0 1366 310"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="gemini-svg"
      >
        {/* ── Path 1 (outermost) ── */}
        <motion.path
          d="M0 128C61 128 61 191 122 191C183 191 183 70 244 70C305 70 305 233 366 233C427 233 427 15 488 15C549 15 549 250 610 250C671 250 671 0 732 0C793 0 793 250 854 250C915 250 915 15 976 15C1037 15 1037 233 1098 233C1159 233 1159 70 1220 70C1281 70 1281 191 1342 191C1374 191 1374 128 1366 128"
          stroke="url(#grad1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transition={transition}
        />
        {/* ── Path 2 ── */}
        <motion.path
          d="M0 144C61 144 61 207 122 207C183 207 183 84 244 84C305 84 305 247 366 247C427 247 427 29 488 29C549 29 549 264 610 264C671 264 671 14 732 14C793 14 793 264 854 264C915 264 915 29 976 29C1037 29 1037 247 1098 247C1159 247 1159 84 1220 84C1281 84 1281 207 1342 207C1374 207 1374 144 1366 144"
          stroke="url(#grad2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
          transition={transition}
        />
        {/* ── Path 3 (centre) ── */}
        <motion.path
          d="M0 160C61 160 61 223 122 223C183 223 183 100 244 100C305 100 305 261 366 261C427 261 427 45 488 45C549 45 549 278 610 278C671 278 671 28 732 28C793 28 793 278 854 278C915 278 915 45 976 45C1037 45 1037 261 1098 261C1159 261 1159 100 1220 100C1281 100 1281 223 1342 223C1374 223 1374 160 1366 160"
          stroke="url(#grad3)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[2] }}
          transition={transition}
        />
        {/* ── Path 4 ── */}
        <motion.path
          d="M0 176C61 176 61 239 122 239C183 239 183 116 244 116C305 116 305 275 366 275C427 275 427 61 488 61C549 61 549 292 610 292C671 292 671 42 732 42C793 42 793 292 854 292C915 292 915 61 976 61C1037 61 1037 275 1098 275C1159 275 1159 116 1220 116C1281 116 1281 239 1342 239C1374 239 1374 176 1366 176"
          stroke="url(#grad4)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[3] }}
          transition={transition}
        />
        {/* ── Path 5 (innermost) ── */}
        <motion.path
          d="M0 192C61 192 61 255 122 255C183 255 183 132 244 132C305 132 305 289 366 289C427 289 427 77 488 77C549 77 549 306 610 306C671 306 671 56 732 56C793 56 793 306 854 306C915 306 915 77 976 77C1037 77 1037 289 1098 289C1159 289 1159 132 1220 132C1281 132 1281 255 1342 255C1374 255 1374 192 1366 192"
          stroke="url(#grad5)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[4] }}
          transition={transition}
        />

        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#18CCFC" stopOpacity="0" />
            <stop offset="32.5%" stopColor="#18CCFC" />
            <stop offset="100%" stopColor="#6344F5" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#AE48FF" stopOpacity="0" />
            <stop offset="32.5%" stopColor="#AE48FF" />
            <stop offset="100%" stopColor="#6344F5" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#18CCFC" stopOpacity="0" />
            <stop offset="32.5%" stopColor="#18CCFC" />
            <stop offset="100%" stopColor="#6344F5" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#AE48FF" stopOpacity="0" />
            <stop offset="32.5%" stopColor="#AE48FF" />
            <stop offset="100%" stopColor="#6344F5" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#18CCFC" stopOpacity="0" />
            <stop offset="32.5%" stopColor="#18CCFC" />
            <stop offset="100%" stopColor="#6344F5" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
