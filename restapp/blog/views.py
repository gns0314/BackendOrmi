from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Post
from .serializers import PostSerializer, CommentSerializer, HashTagSerializer

# Post


class Index(APIView):
    def get(self, request):
        posts = Post.objects.all()
        serialized_posts = PostSerializer(posts, many=True)  # 직렬화
        return Response(serialized_posts.data)


class Write(APIView):
    # def get(self, request):
    #     # 사용자 작성 Form 만들어서 보내줌
    #     pass
    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            # 2차 수정
            post = serializer.save(writer=request.user)
            post.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Update(APIView):
    def get(self, request, pk):
        post = Post.objects.get(pk=pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)

    def post(self, request, pk):
        post = Post.objects.get(pk=pk)
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class Delete(APIView):
    def post(self, request, pk):
        post = Post.objects.get(pk=pk)
        # serializer = PostSerializer(post)
        # if serializer.is_valid():
        Post.delete()
        return Response({'message': 'Post deleted'}, status=status.HTTP_204_NO_CONTENT)


# Commnet
class CommentWrite(APIView):
    def post(self, request, pk):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            comment = serializer.save(writer=request.user)
            comment.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CommentDelete(APIView):
    def post(self, request, pk):
        comment = Comment.objects.get(pk=pk)
        comment.delete()
        serializer = CommentSerializer(comment)
        return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)


# HashTag
class HashTagWrite(APIView):
    def post(self, request, pk):
        serializer = HashTagSerializer(data=request.data)
        if serializer.is_valid():
            hashtag = serializer.save(writer=request.user)
            hashtag.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class HashTagDelete(APIView):
    def post(self, request, pk):
        hashtag = HashTag.objects.get(pk=pk)
        hashtag.delete()
        serializer = HashTagSerializer(hashtag)
        return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
