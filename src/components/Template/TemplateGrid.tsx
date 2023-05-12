import { Grid, GridItem } from "@chakra-ui/react";
import { SideBar } from "../SideBar";
interface TemplateGridProps {
  children: React.ReactNode;
}

export const TemplateGrid = ({ children }: TemplateGridProps) => {
  return (
    <Grid gridTemplateColumns={"1fr 1fr"} h="calc(100vh - 128px)">
      <GridItem display={{ base: "none", sm: "grid" }} h={"100%"}>
        <SideBar />
      </GridItem>

      <GridItem>{children}</GridItem>
    </Grid>
  );
};
