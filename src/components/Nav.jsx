import { auth } from "../firebaseConfig"

export default function Nav({ articles, setArticle }) {
  return (
    <nav>
      <div className = "title-menu">
        {!articles
          ? "No articles"
          : articles.map((a) => (
              <p key={a.id} onClick={() => setArticle(a)}>
                {a.title}
              </p>
        ))}
      </div>
      <div className = "profile-box">
        {auth.currentUser.photoURL && (
          <img
            src={auth.currentUser.photoURL}
            alt="Profile"
            className="profile-image"
          />
        )}
      </div>
    </nav>
  )
}
