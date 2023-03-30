import React, { FunctionComponent } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { ILayoutProps } from './Layou.props';
import styles from './Layout.module.scss';

export function Layout ({children}:ILayoutProps):JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header}/>
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer}/>
    </div>
  );
}



export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
        <Layout>
          <Component {...props} />
        </Layout>
    );
  };
};
