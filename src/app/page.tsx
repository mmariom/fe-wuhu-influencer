import HomeLayout from "./layouts/HomeLayout";
import MainContent from "@/components/homepage/MainContent";
export default function App() {
  return (

      <HomeLayout>
        <MainContent />
        {/* Other components specific to the homepage can also go here */}
      </HomeLayout>  );
}
