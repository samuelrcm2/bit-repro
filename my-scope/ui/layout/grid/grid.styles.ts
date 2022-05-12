import { Row as AntdRow, Col as AntdCol } from 'antd';
import styled from 'styled-components/macro';
import 'antd/dist/antd.css';
export const Row = styled(AntdRow)``;

export const Col = styled(AntdCol)``;

export const Composition = styled.div`
  .ant-row {
    background: rgba(128, 128, 128, 0.08);
    margin: 10px;
    color: #ffff;

    > div:not(.gutter-row):nth-child(2n) {
      background: #0092ff;
    }

    > div:not(.gutter-row):nth-child(2n + 1) {
      background: rgba(0, 146, 255, 0.75);
    }
  }
  .ant-col {
    display: flex;
    justify-content: center;
  }
`;
