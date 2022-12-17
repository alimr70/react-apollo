import UserDisplay from "./components/UserDisplay"
import type { User } from "./types"

function App() {
  const users: User[] = [{
    name: "Ali Maher",
    messages: [{
      body: 'Hallo von Kairo, Aegypten'
    }, {
      body: 'Wie geht es Ihnen!'
    }]
  }]

  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      {
        users.map((user, idx) => <UserDisplay user={user} key={idx} />)
      }
    </div>
  )
}

export default App
