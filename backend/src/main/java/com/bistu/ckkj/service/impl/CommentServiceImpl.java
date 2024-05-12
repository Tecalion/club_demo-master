package com.bistu.ckkj.service.impl;

import com.bistu.ckkj.mapper.CommentMapper;
import com.bistu.ckkj.pojo.Comment;
import com.bistu.ckkj.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {

    private final CommentMapper commentMapper;
    @Override
    public void addComment(Comment comment) {
        commentMapper.insert(comment);
    }

    @Override
    public void deleteComment(Integer id) {
    commentMapper.deleteById(id);
    }

    @Override
    public void updateComment(Comment comment) {
        commentMapper.update(comment);
    }

    @Override
    public Comment selectCommentById(Integer id) {
        return commentMapper.selectById(id);


    }

    @Override
    public List<Comment> selectAllComment() {
        return commentMapper.selectAll();
    }

    @Override
    public List<Comment> selectCommentByArticleId(Integer articleId) {
        return commentMapper.selectByArticleId(articleId);
    }
}
