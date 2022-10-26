import { Post } from 'types/blog.type';
import { nanoid } from '@reduxjs/toolkit';

export const initalPostList: Post[] = [
  {
    description:
      'Chắc hẳn ai cũng nghĩ rằng một ngày làm việc của lập trình viên đa phần là xoay quanh chiếc máy tính và viết code, nhưng lập trình viên liệu có phải chỉ viết code? Trong bài viết này, mình sẽ giúp các bạn có cái nhìn tổng quát hơn về những công việc hàng ngày và điển hình nhất của lập trình viên.\n',
    featuredImage:
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    id: nanoid(),
    publishDate: '2022-10-20T11:32',
    title: 'Công việc hằng ngày của một lập trình viên'
  },
  {
    description:
      'Lập trình viên dành phần lớn thời gian dùng để code. Ở mỗi vị trí khác nhau sẽ đảm nhận một nhiệm vụ riêng.\n' +
      '\n' +
      'Để có thể viết code thành thạo, bạn cần phải có tư duy lập trình tốt và trang bị cho bản thân những kiến thức và kỹ năng về ngôn ngữ lập trình.\n' +
      '\n' +
      'Bởi vì, code là công cụ để xây dựng và phát triển phần mềm, website hay application. Nó cũng là quá trình chuyển đổi ý tưởng của con người thành công việc cho máy tính.\n',
    featuredImage:
      'https://images.unsplash.com/photo-1631624217902-d14c634ab17c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    id: nanoid(),
    publishDate: '2022-10-20T11:33',
    title: 'Viết code'
  },
  {
    description:
      'Đây là công việc thường được dành cho leader hay những người có kinh nghiệm làm việc lâu năm. Nhiệm vụ của họ là xem xét, đánh giá và sửa lỗi đoạn code cho dự án.\n' +
      '\n' +
      'Công việc này được đánh giá là khó và áp lực hơn rất nhiều so với viết code. Bởi họ phải đánh giá những dòng code mà không phải mình viết và cần có một vốn kiến thức rất lớn để hiểu tại sao "nó lại được code như vậy". Bên cạnh đó, phải tập trung suy nghĩ ở mức cao hơn so với người viết ra đoạn code đó, thì mới có thể tìm ra được những lỗi khiến đoạn code đó không thể xử lý hoặc xử lý kém.\n',
    featuredImage:
      'https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    id: nanoid(),
    publishDate: '2022-10-20T11:33',
    title: 'Review code'
  },
  {
    description:
      'Sau khi lập trình viên code xong một chức năng nào đó sẽ phải đưa cho tester - người có vai trò là nghĩ ra thật nhiều trường hợp và đảm bảo phần mềm phải chạy tốt trên tất cả các trường hợp đó, để test và tìm lỗi. Mặc dù vậy, nhưng trước khi đưa cho tester kiểm tra code, mỗi lập trình viên sẽ chạy thử và viết unit test cẩn thận để chắc chắn rằng chương trình chạy đúng, module đã hoàn thành.\n' +
      '\n' +
      'Nếu phát hiện có Bug (những lỗi ta gặp khi code, làm chương trình chạy sai) trong quá trình test Code, lập trình viên phải lọc và sửa lại code sao cho chương trình chạy đúng.\n',
    featuredImage:
      'https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80',
    id: nanoid(),
    publishDate: '2022-10-20T11:35',
    title: 'Test code và fix bug.'
  },
  {
    description:
      'Trên thực tế, lập trình viên phải tham gia rất nhiều cuộc họp khác nhau như khi có dự án mới, khi hoàn thiện một dự án, khi có Business không rõ ràng, cần thảo luận, khi thảo luận với đối tác, khi cần training công nghệ mới…\n' +
      '\n' +
      'Tần suất diễn ra các cuộc họp có thể khác nhau, nhưng việc họp là một trong những công việc diễn ra khá thường xuyên đối với một lập trình viên. Vai trò của Developer trong mỗi cuộc họp cũng rất đa dạng, tùy thuộc vào tính chất của cuộc họp như có thể là người làm chủ cuộc họp, người nêu ý kiến, hay thậm chí là thư ký.\n',
    featuredImage:
      'https://images.unsplash.com/photo-1531539134685-27d854339120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    id: nanoid(),
    publishDate: '2022-10-20T11:35',
    title: 'Họp hành và báo cáo'
  }
];
