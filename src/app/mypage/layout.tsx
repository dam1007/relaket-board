export default function RootLayout({
    children,   
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="mypage_wrapper">
            <div className="inner">
                {children}
            </div>
        </div>
    );
};