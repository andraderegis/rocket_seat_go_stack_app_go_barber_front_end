import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;
`;

export const Title = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
`;

export const BackToSignButtom = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  position: absolute;
`;

export const BackToSignButtomText = styled.Text`
  color: #fff;
  font-family: 'Robotoslab-Regular';
  font-size: 18px;
  margin-left: 10px;
`;
