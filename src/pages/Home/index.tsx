import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { HsAdminCodemirror } from '@react-admin/pro-codemirror';
import { useModel } from '@umijs/max';
import { SetStateAction, useEffect, useState } from 'react';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  const [code, setCode] = useState('');

  const codemirrorChange = (val: SetStateAction<string>, viewUpdate: any) => {
    console.log('CodeMirror: onChange', val, viewUpdate);
    setCode(val);
  };

  useEffect(() => {}, []);

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
      <HsAdminCodemirror
        value={code}
        setValue={setCode}
        height="300px"
        onChange={codemirrorChange}
      />
    </PageContainer>
  );
};

export default HomePage;
