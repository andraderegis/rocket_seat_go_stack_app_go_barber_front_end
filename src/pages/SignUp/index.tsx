import React, { RefObject, useCallback, useRef } from 'react';
import { Image, View, KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Title, BackToSignButtom, BackToSignButtomText } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.png';

const SignUp = (): JSX.Element => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleSubmitForm = () => {
    formRef.current?.submitForm();
  };

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

            <Form
              ref={formRef}
              onSubmit={(data: any) => {
                console.log(data);
              }}
            >
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
                Entrar
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
