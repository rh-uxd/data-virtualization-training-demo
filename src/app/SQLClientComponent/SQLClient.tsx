import React, {useState} from 'react';
import {
  ActionGroup,
  Bullseye,
  Button,
  Card,
  CardBody,
  EmptyState,
  EmptyStateBody,
  Form,
  FormGroup,
  FormSelect,
  FormSelectOption,
  Grid,
  GridItem,
  TextInput,
  Title
} from '@patternfly/react-core';

const SQLClient = () => {

  const options1 = [
    { value: 'please choose', label: 'Please choose', disabled: false },
    { value: 'contact', label: 'Contact', disabled: false },
    { value: 'wine', label: 'Wine', disabled: false},
    { value: 'todo choose', label: 'To do', disabled: false}
  ];

  const [value1, setValue1] = useState('Please choose');
  const [value2, setValue2] = useState(15);
  const [value3, setValue3] = useState(15);

  const onChange = (value, event) => {
    setValue1(value);
  };

  const handleTextInputChange1 = value => {
    setValue2(value);
  };

  const handleTextInputChange2 = value => {
    setValue3(value);
  };

  return (
    <Grid>
      <GridItem sm={12} lg={6}>
        <Card>
          <CardBody>
            <Form isHorizontal>
              <FormGroup label="View" isRequired fieldId="form-select-one" helperText="The view to query">
                <FormSelect
                  value={value1}
                  onChange={onChange}
                  id="form-select-one"
                  name="form-select-one"
                  aria-label="Choose a view"
                >
                  {options1.map((option, index) => (
                    <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
                  ))}
                </FormSelect>
              </FormGroup>
              <FormGroup label="Row limit" isRequired fieldId="form-input-one" helperText="Maximum number of result rows">
                <TextInput
                  value={value2}
                  onChange={handleTextInputChange1}
                  isRequired
                  type="number"
                  id="form-input-one"
                  name="form-input-one"
                />
              </FormGroup>
              <FormGroup label="Row offset" isRequired fieldId="form-input-two" helperText="Number of result rows to skip">
                <TextInput
                  value={value3}
                  onChange={handleTextInputChange2}
                  isRequired
                  type="number"
                  id="form-input-two"
                  name="form-input-two"
                />
              </FormGroup>
              <ActionGroup>
                <Button variant="primary">Submit</Button>
              </ActionGroup>
            </Form>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem sm={12} lg={6}>
        <Bullseye>
          <EmptyState>
            <Title headingLevel="h2" size="lg">
              No data available
            </Title>
            <EmptyStateBody>
              Query has not been executed. Select a view and submit the query.
            </EmptyStateBody>
          </EmptyState>
        </Bullseye>
      </GridItem>
    </Grid>
  );
}

export {SQLClient};
