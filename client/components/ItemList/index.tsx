import { Box, List, Text } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import React, { ReactElement, useContext } from 'react'
import { Context } from '../../context';
import ListItem from '../ListItem';

interface Props {
  type: "goal" | "grat";
}

export default function ItemList({ type }: Props): ReactElement {
  const titles = {
    goal: "Goals",
    grat: "Gratitudes"
  }
  const { state, dispatch } = useContext(Context);
  return (
    <div>
      <Box>
        <Text fontSize="2xl" fontWeight="bold">
          {titles[type]}
        </Text>
        <List>
          {state.goals &&
            state.goals.map((goal) => {
              return (
                <>
                  <ListItem type={type} data={goal} />
                  <br />
                </>
              );
            })}
          {state.goals && state.goals.length <= 4 ? (
            <ListItem type={type} />
          ) : (
              <Text>Those are some great { type }s!</Text>
          )}
        </List>
      </Box>
    </div>
  );
}
