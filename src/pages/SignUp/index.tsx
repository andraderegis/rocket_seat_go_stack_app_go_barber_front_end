import React, { RefObject, useCallback, useRef } from 'react';
import {
  Alert,
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Icon from 'react-native-vector-icons/Feather';
import * as Yup from 'yup';

import { Container, Title, BackToSignButtom, BackToSignButtomText } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.png';

import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp = (): JSX.Element => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSubmitForm = () => {
    formRef.current?.submitForm();
  };

  const handleSignUp = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('Email obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos')
      });

      await schema.validate(data, {
        abortEarly: false
      });

      await api.post('/users', data);

      Alert.alert('Cadastro realizado com sucesso!', 'Você pode realizar login na aplicação.');

      navigation.goBack();
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const validateErrors = getValidationErrors(error);

        formRef.current?.setErrors(validateErrors);

        return;
      }

      console.log(error);

      Alert.alert('Erro na cadastro', 'Ocorreu um erro ao fazer o cadastro.');
    }
  }, []);

  const onSubmitEditingInputFocus = (inputRef: RefObject<TextInput>) => {
    return () => {
      inputRef.current?.focus();
    };
  };

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView contentContainerStyle={{ flex: 1 }} keyboardShouldPersistTaps="handled">
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Crie a sua conta</Title>
            </View>

            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input
                autoCapitalize="words"
                returnKeyType="next"
                name="name"
                icon="user"
                placeholder="Nome"
                onSubmitEditing={onSubmitEditingInputFocus(emailInputRef)}
              />
              <Input
                ref={emailInputRef}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                name="email"
                icon="mail"
                placeholder="E-mail"
                onSubmitEditing={onSubmitEditingInputFocus(passwordInputRef)}
              />
              <Input
                ref={passwordInputRef}
                secureTextEntry
                textContentType="newPassword"
                name="password"
                icon="lock"
                placeholder="Senha"
                returnKeyType="send"
                onSubmitEditing={handleSubmitForm}
              />

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Cadastrar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignButtom
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignButtomText>Voltar para logon</BackToSignButtomText>
      </BackToSignButtom>
    </>
  );
};

export default SignUp;
