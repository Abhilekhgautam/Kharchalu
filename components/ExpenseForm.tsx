import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

interface Expense {
  remark: string;
  amount: number;
}

export default function ExpenseForm() {
  const [remark, setRemark] = useState("");
  const [amount, setAmount] = useState("");
  const [remarkMsg, setRemarkMsg] = useState("");
  const [amountMsg, setAmountMsg] = useState("");

  const handleFormSubmission = () => {
    if (remark.length === 0) {
      setRemarkMsg("Remarks field is required");
    } else {
      setRemarkMsg("");
    }

    if (amount.length === 0) {
      setAmountMsg("Amount field is required");
      return;
    } else {
      setAmountMsg("");
    }

    const numeric_amount = parseFloat(amount);
    if (Number.isNaN(numeric_amount)) {
      setAmountMsg("The amount must be a numeric value");
      return;
    }
  };

  const cancelFormSubmission = () => {
    // Do sth later
  };

  return (
    <View style={styles.FormContainer}>
      <Text style={styles.Label}>Expense Remark:</Text>
      <Text style={styles.InputMsg}>{remarkMsg}</Text>
      <TextInput
        value={remark}
        onChangeText={(text) => setRemark(text)}
        style={styles.InputField}
      ></TextInput>

      <Text style={styles.Label}>Expense Amount:</Text>
      <Text style={styles.InputMsg}>{amountMsg}</Text>

      <TextInput
        value={amount}
        keyboardType="number-pad"
        onChangeText={(text) => setAmount(text)}
        style={styles.InputField}
      ></TextInput>

      <View style={styles.ButtonContainer}>
        <View style={styles.ButtonWrapper}>
          <Button
            onPress={handleFormSubmission}
            title="Add"
            color="#841584"
            accessibilityLabel="Add the expense"
          />
        </View>
        <View style={styles.ButtonWrapper}>
          <Button
            onPress={cancelFormSubmission}
            title="Cancel"
            color="#f194ff"
            accessibilityLabel="Cancel the process"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  FormContainer: {
    padding: 10,
    backgroundColor: "black",
  },
  Label: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  InputField: {
    color: "white",
    fontSize: 15,
    padding: 10,
    borderColor: "white",
    borderWidth: 1,
    marginTop: 15,
  },
  ButtonContainer: {
    flexDirection: "row", // Arrange buttons horizontally
    justifyContent: "space-between", // Space buttons evenly
    padding: 10,
  },
  ButtonWrapper: {
    flex: 1, // Ensure equal width for buttons
    marginHorizontal: 5, // Add space between buttons
  },
  InputMsg: {
    color: "red",
    fontSize: 12,
  },
});
