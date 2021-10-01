import store from '../redux/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
// 
import { HomePage } from "./01-pages/HomePage";
import { ExplorePage } from "./01-pages/ExplorePage";
import { NotificationsPage } from "./01-pages/NotificationsPage";
import { MessagesPage } from "./01-pages/MessagesPage";
import { ListsPage } from "./01-pages/ListsPage";
import { MenuSection } from "./02-sections/MenuSection"
import { ProfilePage } from "./01-pages/ProfilePage";
import { BookmarksPage } from "./01-pages/BookmarksPage";

const App = () => {
 	return(
		<Provider store={store} >
			<Router>
				<MenuSection></MenuSection>
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/explore" exact>
						<ExplorePage />
					</Route>
					<Route path="/notifications" exact>
						<NotificationsPage />
					</Route>
					<Route path="/messages" exact>
						<MessagesPage />
					</Route>
					<Route path="/bookmarks" exact>
						<BookmarksPage />
					</Route>
					<Route path="/lists" exact>
						<ListsPage />
					</Route>
					<Route path="/profile" exact>
						<ProfilePage />
					</Route>
					<Route>
						<Redirect to="/" />
					</Route>
				</Switch>
			</Router>
		</Provider>
  	)
}

export default App
