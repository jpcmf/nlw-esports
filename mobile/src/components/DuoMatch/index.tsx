import {
  Text,
  View,
  Modal,
  Alert,
  ModalProps,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { styles } from './styles';
import * as Clipboard from 'expo-clipboard';
import { CheckCircle } from 'phosphor-react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { THEME } from '../../theme';
import { Heading } from '../Heading';
import React, { useState } from 'react';

interface DuoMatchProps extends ModalProps {
  discord: string;
  onClose: () => void;
}
export function DuoMatch({ discord, onClose, ...rest }: DuoMatchProps) {
  const [isCopy, setIsCopy] = useState(false);

  async function handleCopyDiscordUserToClipboard() {
    setIsCopy(true);

    await Clipboard.setStringAsync(discord);

    Alert.alert('Discord copiado!', 'Nome do usuário copiado com sucesso.');

    setIsCopy(false);
  }

  return (
    <Modal {...rest} transparent statusBarTranslucent animationType="fade">
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />

          <Heading
            title="Let`s play"
            subtitle="Agora é só começar a jogar!"
            style={{ alignItems: 'center', marginTop: 24 }}
          />

          <Text style={styles.label}>Adicione no Discord</Text>

          <TouchableOpacity
            style={styles.discordBtn}
            onPress={handleCopyDiscordUserToClipboard}
            disabled={isCopy}
          >
            {isCopy ? (
              <ActivityIndicator color={THEME.COLORS.PRIMARY} />
            ) : (
              <Text style={styles.discord}>{discord}</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
