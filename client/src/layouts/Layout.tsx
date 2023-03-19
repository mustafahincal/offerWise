import Content from "@/components/content/Content";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default Layout;
