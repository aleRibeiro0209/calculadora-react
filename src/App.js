import {Container, Content, GrandButton, Row} from './styles';
import Input from './components/Input';
import {Button, ButtonOr, ButtonEs} from './components/Button';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  // Limpar display da calculadora
  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
  }
  
  // Função e Soma
  const handleSumNumber = () => {
    
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }
  }

  // Funcão de Subtração
  const handleSubNumber = () => {
    
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setFirstNumber('0');
      setOperation('');
    }
  }

  // Função de Multiplicação
  const handleMultNumber = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setFirstNumber('0');
      setOperation('');
    }
  }

  // Função de Divisão
  const handleDivNumber = () => {

    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/')
    } else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setFirstNumber('0');
      setOperation('');
    }
  }

  // Função de Positivo/Negativo
  const handlePosNegNumber = () => {
    const numberToggle = Number(currentNumber) * (-1);
    setCurrentNumber(String(numberToggle));
  }

  // Função de porcentagem
  const handlePorcentNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('%')
    } else {
      const porcent = (Number(firstNumber) / 100) * Number(currentNumber);
      setCurrentNumber(String(porcent));
      setFirstNumber('0');
      setOperation('');
    }
  }

  // Função para o igual
  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleSubNumber();
          break;
        case 'x':
          handleMultNumber();
          break;
        case '/':
          handleDivNumber();
          break;
        case '%':
          handlePorcentNumber();
          break;
        default:
          break;
      }
    }
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <ButtonEs label="AC" onClick={handleOnClear}/>
          <ButtonEs label="+/-" onClick={handlePosNegNumber}/>
          <ButtonEs label="%" onClick={handlePorcentNumber}/>
          <ButtonOr label="/" onClick={handleDivNumber}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <ButtonOr label="x" onClick={handleMultNumber}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <ButtonOr label="-" onClick={handleSubNumber}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <ButtonOr label="+" onClick={handleSumNumber}/>
        </Row>
        <Row>
          <GrandButton>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
          </GrandButton>
          <Button label="." onClick={() => handleAddNumber('.')}/>
          <ButtonOr label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
