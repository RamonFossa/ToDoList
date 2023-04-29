import { Text, TouchableOpacity, Image, View } from 'react-native';
import { styles, textStyle } from './styles'
import { useState }  from "react";

type Props = {
    done: boolean;
    description: string;
    onDelete: () => void;
    onToogle: () => void;
}

export function Task({ done, description, onDelete, onToogle}: Props) {
    
    const [trashIconIndex, setTrashIconIndex] = useState(0);

    const toogleIcon = done
  ? require('../../../assets/done.png')
  : require('../../../assets/circle.png');

    const trashIcon = [
        require('../../../assets/trash.png'),
        require('../../../assets/trashPressed.png')
    ]
    
    const handleDelete = () => {
        setTrashIconIndex(1);
        setTimeout(onDelete, 20);
    }

    return (
        <>
            <TouchableOpacity style={styles.container} activeOpacity={1} onPress={onToogle}>
                <View style={styles.toogleContainer}>
                    <Image source={toogleIcon} />
                </View>
                
                <View style={styles.textContainer}>
                    <Text style={textStyle(done)}>
                        {description}
                    </Text>
                </View>

                <TouchableOpacity style={styles.trashButton} activeOpacity={1} onPress={handleDelete}>
                    <Image source={trashIcon[trashIconIndex]} />
                </TouchableOpacity>

            </TouchableOpacity>
        </>
    )
}