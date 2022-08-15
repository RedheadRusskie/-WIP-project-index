//hooks
import { useFetch } from "../../hooks/useFetch";

//components
import ProjectList from "../../components/ProjectList/ProjectList";

export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/projects')
  
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading..</p>}
      {data && <ProjectList data={data} />}
    </div>
  )
}