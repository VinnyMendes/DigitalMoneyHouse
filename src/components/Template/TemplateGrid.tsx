import { Grid, GridItem } from "@chakra-ui/react";
import { SideBar } from "../SideBar";
interface TemplateGridProps {
  children: React.ReactNode;
}

export const TemplateGrid = ({ children }: TemplateGridProps) => {
  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", sm: "221px 1fr", lg: "276px 1fr" }}
      h="calc(100vh - 128px)"
    >
      <GridItem display={{ base: "none", sm: "grid" }} h={"100%"}>
        <SideBar />
      </GridItem>

      <GridItem
        p={{
          base: "20px 20px 42px 20px",
          sm: "68px 52px 85px 50px",
          lg: "40px 79px 42px 79px",
        }}
      >
        {children}
      </GridItem>
    </Grid>
  );
};
