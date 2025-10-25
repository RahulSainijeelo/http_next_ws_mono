import Image, { type ImageProps } from "next/image";
import { client } from "@repo/prisma/client"

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = async (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;
  
  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default async function Home() {
  const user = await client.user.findFirst();
  
 return (
  <div>
<div>
      {user?.toString()}
    </div>
  </div>
 )
}
