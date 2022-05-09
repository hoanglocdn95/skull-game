import { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Form, Input, Button, Row, Col, Divider, Layout, Slider, InputNumber } from 'antd';

import { NUMBER_OF_PLAYER } from 'constants/index';

const Login = () => {
  const [numberPlayer, setNumberPlayer] = useState(NUMBER_OF_PLAYER.MIN);

  const [form] = Form.useForm();
  console.log('Login ~ form', form);

  const responseGoogle = (response: any) => {
    console.log(response);
  };
  const logout = () => {
    console.log('lôgout');
  };

  const onFill = () => {
    form.setFieldsValue({
      numberPlayer: 4,
      inviteCode: 'FGASSD',
    });
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Layout
      style={{
        maxWidth: 1200,
        margin: '20px auto',
        boxShadow: '0 0 16px 10px rgb(125 75 30 / 15%)',
      }}
    >
      <Row justify={'space-between'}>
        <Col>
          <Form
            name="control-hooks"
            onFinish={onFinish}
            initialValues={{
              numberPlayer: 4,
              inviteCode: 'KHONG CO',
            }}
          >
            <Form.Item
              label="Number Of Player"
              name="numberPlayer"
              rules={[{ required: true, message: 'Please input number of players!' }]}
            >
              <Row>
                <Col span={12}>
                  <Slider
                    defaultValue={NUMBER_OF_PLAYER.MIN + 2}
                    min={NUMBER_OF_PLAYER.MIN}
                    max={NUMBER_OF_PLAYER.MAX}
                    tipFormatter={(value) => `${value} Players`}
                    onChange={(value) => Form.onValuesChange(value)}
                    value={typeof numberPlayer === 'number' ? numberPlayer : 2}
                  />
                </Col>
                <Col span={4}>
                  <InputNumber
                    min={1}
                    max={20}
                    style={{ margin: '0 16px' }}
                    value={numberPlayer}
                    onChange={(value) => setNumberPlayer(value)}
                  />
                </Col>
              </Row>
            </Form.Item>
            <Form.Item
              label="Invite Code"
              name="inviteCode"
              rules={[{ message: 'Please type invite code if you have!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create Room
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
              <Button type="link" htmlType="button" onClick={onFill}>
                Fill form
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col>
          <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID as string}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          >
            Login with Google
          </GoogleLogin>
          <GoogleLogout
            clientId={process.env.REACT_APP_CLIENT_ID as string}
            buttonText="Logout"
            onLogoutSuccess={logout}
          ></GoogleLogout>
        </Col>
      </Row>
      <Divider
        style={{
          margin: '20px 0',
        }}
      />
      <Row>
        <h3>
          Lấy cảm hứng từ nghi thức thờ cúng tổ tiên của người dân San Francisco cùng lời nguyền cổ
          xưa: “Bất cứ kẻ nào dám chạm đến sự yên nghỉ của người đã khuất bởi việc lấy cắp những
          chiếc đầu lâu ngay lập tức sẽ phải trả giá từ chính mạng sống của mình”, Skull ra đời. Một
          sự kết hợp đầy thú vị giữa thể loại chiến thuật và lừa phỉnh.
        </h3>
        <pre>
          Mục tiêu: Thành công trong 2 lần thử thách hoặc là người cuối cùng còn giữ thẻ trên tay.
          Thành phần: 6 bộ tộc dành cho 6 người chơi, tương ứng với 6 màu sắc khác nhau. Mỗi bộ tộc
          gồm: 3 thẻ hoa 1 thẻ đầu lâu 1 tấm thảm Chuẩn bị: Mỗi người chơi chọn 1 bộ gồm 4 thẻ cùng
          màu và tấm thảm tương ứng. Đặt tấm thảm trước mặt. Che các thẻ bài lại và không cho người
          khác thấy.
        </pre>
        <pre>
          Bắt đầu Bước 1: Chọn thẻ đầu tiên Mỗi người chơi chọn 1 trong những thẻ bài của mình và
          đặt úp xuống thảm. Bước 2: Lựa chọn “thêm thẻ” hoặc “thách thức” Thêm thẻ: Người chơi đầu
          tiên có thể thêm 1 thẻ bài bằng cách đặt nó lên trên thẻ bài trước đó. Người chơi bên trái
          cũng có thể thêm vào 1 thẻ của mình và tương tự với các người chơi khác theo chiều kim
          đồng hồ. Quy trình này có thễ diễn ra nhiều lần. Thách thức: Nếu không thể hoặc không muốn
          thêm thẻ, người chơi có thể đặt ra thách thức bằng cách người chơi sẽ nói 1 con số. Số này
          tượng trưng cho số hoa mà người chơi đó có thể lật được trên bàn. Theo chiều kim đồng hồ,
          người chơi tiếp theo có thể: Nâng số thẻ hoa có thể lật lên. Hoặc bỏ qua và đẩy thảm của
          mình ra giữa. Khi đó người chơi sẽ mất quyền tham gia trong lượt thách thức. Quá trình này
          tiếp tục cho đến khi các người chơi khác đều “Bỏ qua” và còn lại duy nhất 1 người cuối
          cùng đưa ra con số cao nhất. Người chơi này sẽ là người thách thức. Bước 3: Lật thẻ Người
          thách thức bắt đầu lật những thẻ của chính mình trước. Sau đó, lật thẻ của các người chơi
          khác. Nếu lật trúng thẻ đầu lâu có nghĩa là thử thách thất bại, người chơi dừng việc lật
          thẻ của mình. Xào các thẻ bài của mình và đặt úp chúng xuống bàn Người nắm giữ thẻ đầu lâu
          trước đó sẽ chọn 1 thẻ để loại ra. Thẻ này sẽ không được tiết lộ trong suốt quá trình
          chơi.Chỉ duy nhất người thách thức mới biết thẻ bài bị loại là thẻ hoa hay thẻ đầu lâu.
          Nếu số hoa được lật bằng số người chơi đưa ra, thử thách thành công. Người chơi lật tấm
          thảm về mặt hoa thể hiện người chơi đã ghi được 1 điểm. Lượt chơi mới: Người chơi đầu tiên
          của lượt chơi mới sẽ luôn là người thách thức trước đó nếu không bị loại. Nếu người thách
          thức bị loại vì Lật thẻ đầu lâu của người chơi khác, người chơi đầu tiên của lượt tiếp
          theo sẽ là người có thẻ bài đầu lâu mà người thách thức đã lật. Lật thẻ đầu lâu của chính
          mình, người thách thức sẽ chọn người chơi đầu tiên cho lượt tiếp theo.
        </pre>
      </Row>
    </Layout>
  );
};
export default Login;
