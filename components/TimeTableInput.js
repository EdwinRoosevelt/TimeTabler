import { useState } from 'react'

import { useForm, formList } from "@mantine/form";
import {
  TextInput,
  Switch,
  Group,
  ActionIcon,
  Box,
  Text,
  Button,
  Code, MultiSelect
} from "@mantine/core";
import { Trash } from "tabler-icons-react";

function TimeTableInput() {
  const [data, setData] = useState(["React", "Angular", "Svelte", "Vue"]);
  const form = useForm({
    initialValues: {
      employees: formList([{ name: "", class: "", active: false }]),
    },
  });

  const fields = form.values.employees.map((_, index) => (
    <Group key={index} mt="xs">
      <TextInput
        placeholder="John Doe"
        required
        sx={{ flex: 1 }}
        {...form.getListInputProps("employees", index, "name")}
      />
      <MultiSelect
        data={data}
        placeholder="Select items"
        searchable
        creatable
        getCreateLabel={(query) => `+ Create ${query}`}
        onCreate={(query) => setData((current) => [...current, query])}
        {...form.getListInputProps("employees", index, "class")}
      />
      <Switch
        label="Active"
        {...form.getListInputProps("employees", index, "active")}
      />
      <ActionIcon
        color="red"
        variant="hover"
        onClick={() => form.removeListItem("employees", index)}
      >
        <Trash size={16} />
      </ActionIcon>
    </Group>
  ));

  return (
    <Box sx={{ maxWidth: 500 }} mx="auto" mt="md">
      {fields.length > 0 ? (
        <Group mb="xs">
          <Text weight={500} size="sm" sx={{ flex: 1 }}>
            Name
          </Text>
          <Text weight={500} size="sm" pr={90}>
            Status
          </Text>
        </Group>
      ) : (
        <Text color="dimmed" align="center">
          Add some details
        </Text>
      )}

      {fields}

      <Group position="center" mt="md">
        <Button
          onClick={() =>
            form.addListItem("employees", { name: "", class: "", active: false })
          }
        >
          Add employee
        </Button>
      </Group>

      <Text size="sm" weight={500} mt="md">
        Form values:
      </Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>
    </Box>
  );
}

export default TimeTableInput