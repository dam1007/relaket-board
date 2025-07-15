import { boardWrapper } from "./board.css";

export default function RootLayout({
    children,   
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={boardWrapper}>
            <div className="inner">
                {children}
            </div>
        </div>
    );
};