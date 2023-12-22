import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { useEffect } from 'react';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');

  useEffect(() => {
    const lang = 'php';
    import(`code-example/txt/sample.${lang}.txt`).then((data) => {
      console.log('Language PHP Code Example:', data.default);
      fetch(data.default)
        .then((res) => res.text())
        .then((res) => {
          console.log('[ res ] >', res);
        });
    });
  }, []);

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
