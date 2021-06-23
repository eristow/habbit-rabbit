import { useEffect, useState } from 'react';
import { Box, Button, Select, Layer, Text, TextInput } from 'grommet';

const frequencyOptions = [1, 2, 3, 4, 5, 6, 7];

function Form({
  title,
  closeModal,
  confirmAction,
  habitsLength,
  habit = undefined,
}) {
  const [name, setName] = useState(habit ? habit.label : '');
  const [frequency, setFrequency] = useState(habit ? habit.frequency : 7);
  const [order, setOrder] = useState(habit ? habit.order : habitsLength);
  const [orderRange, setOrderRange] = useState([]);

  // Set max on order select
  useEffect(() => {
    let maxRange = habitsLength;
    const newOrderRange = [];
    if (!habit) {
      maxRange = habitsLength + 1;
      setOrder(maxRange);
    }

    for (let i = 1; i <= maxRange; i++) {
      newOrderRange.push(i);
    }

    setOrderRange(newOrderRange);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layer responsive={false} onEsc={closeModal} onClickOutside={closeModal}>
      <Box pad="medium">
        <Box direction="column" pad="medium">
          <Text alignSelf="center" margin="small">
            {title}
          </Text>
          <TextInput
            placeholder={'Habit Name...'}
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="medium"
          />
          <Box
            direction="row"
            justify="between"
            margin={{ top: 'small', bottom: 'small' }}
          >
            <Text alignSelf="center" margin={{ right: 'small' }}>
              Times per week:
            </Text>
            <Select
              options={frequencyOptions}
              value={frequency}
              onChange={({ option }) => setFrequency(option)}
            />
          </Box>
          {habit && (
            <Box
              direction="row"
              justify="between"
              margin={{ top: 'small', bottom: 'small' }}
            >
              <Text alignSelf="center" margin={{ right: 'small' }}>
                Order:
              </Text>
              <Select
                options={orderRange}
                value={order}
                onChange={({ option }) => setOrder(option)}
              />
            </Box>
          )}
        </Box>
        <Box direction="row" margin={{ top: 'medium' }} justify="between">
          <Button
            label="Cancel"
            margin={{ right: 'small' }}
            color="black"
            onClick={closeModal}
          />
          <Button
            label="Confirm"
            margin={{ left: 'small' }}
            color="blue"
            onClick={() => confirmAction(name, frequency, order, habit.order)}
          />
        </Box>
      </Box>
    </Layer>
  );
}

export default Form;
