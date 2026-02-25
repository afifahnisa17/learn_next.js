import Navbar from '@/components/layouts/navbar';

type AppShellProps = {
    children: React.ReactNode;
}

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    return (
        <main className="app-shell">
            <Navbar />
            <div className="app-shell__content">
                {children}
            </div>
            <div className="app-shell__footer">
                footer
            </div>
        </main>
    );
};

export default AppShell;