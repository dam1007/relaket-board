export default function RootLayout({
    children,   
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="board_wrapper">
            <div className="inner">
                {children}
            </div>
        </div>
    );
};