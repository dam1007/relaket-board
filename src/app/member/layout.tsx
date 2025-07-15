import { memberWrapper } from "./member.css";

export default function RootLayout({
    children,   
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={memberWrapper}>
            <div className="inner">
                {children}
            </div>
        </div>
    );
};