import { Container, Stack} from 'react-bootstrap/';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Container className='d-flex py-3 justity-content-between w-100'>
      <h1 className="me-auto fs-3"><Link to="/"  className='link text-dark'>Budgetr</Link></h1>
      <Stack direction="horizontal" gap="3" className="d-flex mb-4">
        <Link to={"/"} className="text-dark link">
          Home
        </Link>
        <Link to={"/about"} className='text-dark link'>
          about
        </Link>
        <Link to={"/dashboard"} className='text-dark link'>
          Dashboard
        </Link>
      </Stack>
    </Container>
  );
}

export default NavBar;