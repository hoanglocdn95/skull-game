import { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Layout,
  Slider,
  InputNumber,
  Divider,
  Typography,
  Space,
} from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from 'redux/slice/user.slice';
import { NUMBER_OF_PLAYER } from 'constants/index';

const Login = () => {
  const [numberPlayer, setNumberPlayer] = useState(NUMBER_OF_PLAYER.MIN);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const { email, familyName, givenName, googleId, imageUrl, name } =
    user.currentUser;
  console.log('Login ~ user', user);
  const { Title, Paragraph, Text, Link } = Typography;
  const [form] = Form.useForm();

  const responseGoogle = (response: any) => {
    if (response) {
      dispatch(updateUser(response.profileObj));
    }
  };
  const logout = () => {
    dispatch(updateUser(null));
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
        padding: 20,
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
              rules={[
                { required: true, message: 'Please input number of players!' },
              ]}
            >
              <Row>
                <Col span={12}>
                  <Slider
                    defaultValue={NUMBER_OF_PLAYER.MIN + 2}
                    min={NUMBER_OF_PLAYER.MIN}
                    max={NUMBER_OF_PLAYER.MAX}
                    tipFormatter={(value) => `${value} Players`}
                    value={typeof numberPlayer === 'number' ? numberPlayer : 2}
                    onChange={(value: number) => setNumberPlayer(value)}
                  />
                </Col>
                <Col span={4}>
                  <p>{numberPlayer}</p>
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
            </Form.Item>
          </Form>
        </Col>
        <Col>
          {googleId ? (
            <>
              <Row>
                <p>Hello, {name}</p>
                <img src={imageUrl} alt="avatar" />
              </Row>
              <GoogleLogout
                clientId={process.env.REACT_APP_CLIENT_ID as string}
                buttonText="Logout"
                onLogoutSuccess={logout}
                icon={undefined}
              />
            </>
          ) : (
            <GoogleLogin
              clientId={process.env.REACT_APP_CLIENT_ID as string}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              buttonText="Login with Google"
            />
          )}
        </Col>
      </Row>
      <Divider
        style={{
          margin: '20px 0',
        }}
      />
      <Row>
        <Space direction="vertical">
          <Title level={3}>
            Lấy cảm hứng từ nghi thức thờ cúng tổ tiên của người dân San
            Francisco cùng lời nguyền cổ xưa: “Bất cứ kẻ nào dám chạm đến sự yên
            nghỉ của người đã khuất bởi việc lấy cắp những chiếc đầu lâu ngay
            lập tức sẽ phải trả giá từ chính mạng sống của mình”, Skull ra đời.
            Một sự kết hợp đầy thú vị giữa thể loại chiến thuật và lừa phỉnh.
          </Title>
          <Text strong>Mục tiêu:</Text>
          <Text>
            Thành công trong 2 lần thử thách hoặc là người cuối cùng còn giữ thẻ
            trên tay
          </Text>
          <Text strong>Thành phần:</Text>
          <Text>
            6 bộ tộc dành cho 6 người chơi, tương ứng với 6 màu sắc khác nhau.
          </Text>
          <Text underline>Mỗi bộ tộc gồm:</Text>
          <Text>3 thẻ hoa</Text>
          <Text>1 thẻ đầu lâu</Text>
          <Text>1 tấm thảm</Text>
          <Text strong>Chuẩn bị:</Text>
          <Text>Mỗi người chơi chọn 1 bộ gồm 4 thẻ cùng màu</Text>
          <Title level={3}>Bắt đầu</Title>
          <Text strong>Bước 1: Chọn thẻ</Text>
          <Text>
            Mỗi người chơi chọn 1 trong những thẻ bài của mình và bấm nút "Đưa
            ra"
          </Text>
          <Text strong>Bước 2: Bấm nút "Thêm thẻ" hoặc "Thách thức"</Text>
          <Text underline>Thêm thẻ</Text>
          <Text>
            Người chơi thêm 1 thẻ bài chọn 1 lá bài khác và bấm nút "Đưa ra",
            không thể hủy, bắt buộc phải chọn.
          </Text>
          <Text>Người chơi tiếp theo cũng có thể làm hành động này</Text>
          <Text underline>Thách thức</Text>
          <Text>
            Nếu không thể hoặc không muốn thêm thẻ, người chơi có thể đặt ra
            thách thức bằng cách: nhập 1 con số vào ô trên nút "Thách Thức".
          </Text>
          <Text>
            Số này tượng trưng cho số thẻ có hình "Hoa" mà người chơi đó có thể
            lật được từ tổng số bài của tất cả mọi người đưa ra trên bàn chơi.
          </Text>
          <Text>Theo chiều kim đồng hồ, người chơi tiếp theo có thể:</Text>
          <ul>
            <li>
              <Text>
                Nâng số thẻ hoa có thể lật lên bằng cách nhập số vào ô phía trên
                nút "Thách thức", số đó phải lớn hơn nút thách thức hiện tại
              </Text>
            </li>
            <li>
              <Text>Hoặc bỏ qua trong lượt đó.</Text>
            </li>
            <li>
              <Text>
                Khi kết thức lượt đó, người đưa ra số Thách thức cao nhất sẽ
                thành Người Thách Thức
              </Text>
            </li>
          </ul>
          <Text strong>Bước 3: Lật thẻ</Text>
          <Text>Người Thách Thức bắt đầu lật từng thẻ của mình trước</Text>
          <Text>Sau đó, lật thẻ của các người chơi khác.</Text>
          <Text>
            Nếu lật trúng thẻ đầu lâu có nghĩa là thử thách thất bại, người chơi
            dừng việc lật thẻ của mình.
          </Text>
          <Text>
            Xào các thẻ bài của mình và đặt úp chúng xuống bàn Người nắm giữ thẻ
            đầu lâu trước đó sẽ chọn 1 thẻ để loại ra
          </Text>
          <Text>Thẻ này sẽ không được tiết lộ trong suốt quá trình chơi</Text>
          <Text>
            Chỉ duy nhất người thách thức mới biết thẻ bài bị loại là thẻ hoa
            hay thẻ đầu lâu.
          </Text>
          <Text>
            Nếu số hoa được lật bằng số người chơi đưa ra, thử thách thành công.
          </Text>
          <Text>
            Người chơi lật tấm thảm về mặt hoa thể hiện người chơi đã ghi được 1
            điểm.
          </Text>
          <Text strong>Lượt chơi mới:</Text>
          <Text>
            Người chơi đầu tiên của lượt chơi mới sẽ luôn là người thách thức
            trước đó nếu không bị loại.
          </Text>
          <Text>Nếu người thách thức bị loại vì</Text>
          <ul>
            <li>
              <Text>
                Lật thẻ đầu lâu của người chơi khác, người chơi đầu tiên của
                lượt tiếp theo sẽ là người có thẻ bài đầu lâu mà người thách
                thức đã lật.
              </Text>
            </li>
            <li>
              <Text>
                Lật thẻ đầu lâu của chính mình, người thách thức sẽ chọn người
                chơi đầu tiên cho lượt tiếp theo.
              </Text>
            </li>
          </ul>
        </Space>
      </Row>
    </Layout>
  );
};
export default Login;
