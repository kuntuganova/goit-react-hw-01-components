import { Profile } from "./profile/Profile";
import user from "./profile/user.json";
import { Statistics } from "./statistics/Statistics";
import data from "./statistics/data.json";
import { FriendList } from "./friendList/FriendList";
import friends from "./friendList/friends.json";
import { TransactionHistory } from "./transactionHistory/TransactionHistory";
import transactions from "./transactionHistory/transactions.json";

export default function App({children}) {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        marginBottom: 30,
      }}
    >
      {children}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        likes={user.stats.likes}
        views={user.stats.views}
      
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  )
}