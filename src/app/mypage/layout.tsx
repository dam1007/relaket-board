import { mypageWrapper } from './mypage.css'

export default function RootLayout({
    children,   
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={mypageWrapper}>
            <div className="inner">
                {children}
            </div>
        </div>
    );
};