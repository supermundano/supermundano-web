import { useRouter } from 'next/router'

const Project = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p>Project: {slug}</p>
}

export default Project
