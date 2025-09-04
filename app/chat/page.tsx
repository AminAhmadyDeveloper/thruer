import { ChatBot } from "@/app/chat/_components/chatbot";

const Page: NextPage = () => {
  return (
    <main className="pt-24 container">
      <div className="border rounded-xl">
        <ChatBot />
      </div>
    </main>
  );
};

export default Page;
