export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 text-white text-sm text-center py-2 px-4">
      <span className="font-medium">Coming Soon</span>
      <span className="mx-2 opacity-60">-</span>
      <a
        href="mailto:DanielPhillips@FanStride.com"
        className="underline underline-offset-2 hover:text-white/80 transition-colors"
      >
        Contact us for details
      </a>
    </div>
  );
}
