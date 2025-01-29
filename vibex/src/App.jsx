import Friends from "./components/Friends";
import Feed from "./components/Feed";
import Navigation from "./components/Navigation";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <>
      <div className="flex min-h-screen w-full items-center justify-center md:flex-row">
        <main className="flex min-h-screen w-full">
          <Navigation />
          <Feed />
          <Friends />
          <BottomNav />
        </main>
      </div>
    </>
  );
}

export default App;
