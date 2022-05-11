import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector, useDispatch} from 'react-redux';

import Input from '../../common/Input';
import Touchable from '../../common/Touchable';
import {updateTodo, updateModal} from '../../redux/todoSlice';
const {width, height} = Dimensions.get('window');

const ModalUpdate = () => {
  const dispatch = useDispatch();
  const {modalVisibleUpdate, selectIdEdit} = useSelector(state => state.todos);
  const [savedName] = useSelector(state =>
    state.todos.list.filter(todo => todo.id === selectIdEdit),
  );

  useEffect(() => {
    setValue(savedName?.title);
  }, [selectIdEdit]);
  const [value, setValue] = useState();

  const EditTodo = () => {
    dispatch(
      updateTodo({
        id: selectIdEdit,
        title: value,
      }),
    ),
      dispatch(
        updateModal({
          modalVisibleUpdate: false,
          selectIdEdit: null,
        }),
      );
  };

  const CancelEditTodo = () => {
    dispatch(
      updateModal({
        modalVisibleUpdate: false,
        selectIdEdit: null,
      }),
    );
  };

  return (
    <Modal isVisible={modalVisibleUpdate}>
      <View style={styles.container}>
        <View style={styles.containerModal}>
          <TouchableOpacity
            style={styles.containerIconClose}
            onPress={CancelEditTodo}>
            <Icon name="close" color={'#D62828'} size={35} />
          </TouchableOpacity>
          <Input
            styleContainer={styles.containerTextInput}
            styleTextInput={styles.input}
            placeholder="Minha tarefa..."
            onChangeText={setValue}
            value={value}
          />
          <View style={styles.containerTouchable}>
            <Touchable
              TextTouchable="Salvar"
              onPress={EditTodo}
              styleTouchable={[styles.touchable, {backgroundColor: '#537fed'}]}
              styleTextTouchable={styles.textTouchable}
            />
            <Touchable
              TextTouchable="Cancelar"
              onPress={CancelEditTodo}
              styleTouchable={[styles.touchable, {backgroundColor: '#D62828'}]}
              styleTextTouchable={styles.textTouchable}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerModal: {
    backgroundColor: '#ffffff',
    width: width - 30,
    height: height - 400,
    position: 'relative',
  },
  containerIconClose: {
    flex: 0.8,
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingTop: 20,
  },
  containerTextInput: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    height: 50,
    width: width / 1.3,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    color: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  containerTouchable: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    height: 40,
    width: width / 4,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    margin: 30,
    marginTop: 5,
  },
  textTouchable: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default ModalUpdate;
