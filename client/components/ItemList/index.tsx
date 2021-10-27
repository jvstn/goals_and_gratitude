import { Box, List, Text } from '@chakra-ui/layout';
import React, { ReactElement, useContext } from 'react'
import { Context } from '../../context';
import { IItem } from '../../context/itemsReducer';
import ListItem from '../ListItem';

interface Props {
  type: "goals" | "grats";
}

export default function ItemList({ type }: Props): ReactElement {
  const titles = {
    goals: "Goals",
    grats: "Gratitudes"
  }
  const { state } = useContext(Context);
  const items = state[type];
  
  return (
    <div>
      <Box>
        <Text fontSize="2xl" fontWeight="bold">
          {titles[type]}
        </Text>

        <List>
          {state &&
            items.map((item: IItem, index) => {
              return (
                <>
                  <ListItem key={index} itemName={type} data={item} index={index} />
                  <br />
                </>
              );
            })}
          {state && items.length <= 4 ? (
            <ListItem itemName={type} />
          ) : (
            <Text>Those are some great {type}s!</Text>
          )}
        </List>
      </Box>
    </div>
  );
}
