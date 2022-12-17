import type { User } from "../types"
import MessageDisplay from "./MessageDisplay"

type Props = {
  user: User
}

const UserDisplay = ({ user }: Props) => {
  return (
    <div className="flex gap-x-24 justify-center">
      <div className="rounded-sm flex justify-center items-center drop-shadow-md bg-neutral-700 w-48 h-20">
        <p className="text-xl text-gray-200 font-bold">
          {user.name}
        </p>
      </div>
      <div>
        {
          user.messages.map((message, idx) => <MessageDisplay message={message} index={idx} key={idx} />)
        }
      </div>
    </div>
  )
}

export default UserDisplay