import { VStack, Image } from '@gluestack-ui/themed'
import BackgroundImg from '@assets/background.png'

{/*Default source ele acelera o carregamento da imagem pois ele entende que aquela imagem nao muda  */}

export function SignIn(){
  return (
    <VStack flex={1} bg="$gray700">
      <Image 
        w="$full"
        h={624}
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt="Pessoas treinando"
        position='absolute'
      />  
    </VStack>
  );
}