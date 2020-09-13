import { Flex, Text, Link } from "Rebass";
import { Input } from "@rebass/forms";

function Navbar() {
  return (
    <Flex variant="navbar">
      <Text p={2} width={1 / 5} fontWeight="bold">
        Todo!
      </Text>
      <Input
        variant="search"
        id="search"
        name="search"
        type="text"
        width={3 / 5}
        placeholder="Search..."
      />
      <Link variant="nav" textAlign={"right"} width={1 / 5} href="#!">
        Settings
      </Link>
    </Flex>
  );
}

export default Navbar;
