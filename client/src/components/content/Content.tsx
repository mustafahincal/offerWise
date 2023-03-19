interface ContentProps {
  children: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return <div className="bg-green-200 flex-1">{children}</div>;
};

export default Content;
