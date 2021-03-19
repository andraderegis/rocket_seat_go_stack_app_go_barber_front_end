import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;
  padding: 0 16px;

  height: 60px;
  width: 100%;
`;

export const TextInput = styled.TextInput`
  flex: 1;

  color: #fff;
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
`;
