export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen grid md:grid-cols-[220px_1fr]">
      <aside className="border-r p-4">
        <div className="mb-6 font-bold">Dashboard</div>
        <nav className="grid gap-2 text-sm">
          <a href="/dashboard" className="hover:underline">Overview</a>
          <a href="/dashboard/settings" className="hover:underline">Settings</a>
          <a href="/" className="hover:underline">Back to Site</a>
        </nav>
      </aside>

      <div className="p-6">
        <header className="border-b mb-6 pb-3 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Admin Panel</h1>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
